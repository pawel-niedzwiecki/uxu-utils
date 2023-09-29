import React from "react";
import { Facebook, Twitter, Link } from 'react-feather';
import styles from "./buttonsSocialShare.module.scss";
import { useSiteConfig, useCopyToClipboard } from "../../../hooks";

type ShareType = 'facebook' | 'twitter';

export function ButtonsSocialShare() {
  const { site } = useSiteConfig();
  const canonicalURL = site?.canonicalUrl || "";
  const [copyStatus, copyToClipboard] = useCopyToClipboard(canonicalURL);

  const shareCanonicalURL = (type: ShareType) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${canonicalURL}`,
      twitter: `https://twitter.com/intent/tweet?url=${canonicalURL}`,
    };
    window.open(urls[type], '_blank');
  };

  return (
    <div className={styles.wrapper} aria-live="assertive" aria-atomic="true">
      <button
        className={styles.btn}
        onClick={() => shareCanonicalURL('facebook')}
        aria-label="Share on Facebook"
        role="button"
      >
        <span>Udostępnij</span>
        <Facebook />
      </button>
      <button
        className={styles.btn}
        onClick={() => shareCanonicalURL('twitter')}
        aria-label="Share on Twitter"
        role="button"
      >
        <Twitter />
      </button>
      <button
        className={styles.btn}
        onClick={copyToClipboard}
        aria-label="Copy link"
        role="button"
      >
        <Link />
        <span>{copyStatus ? "Skopiowano link!" : "Kopiuj link"}</span>
      </button>
    </div>
  );
}
