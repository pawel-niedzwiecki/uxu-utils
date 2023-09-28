import { Facebook, Twitter, Link } from 'react-feather'
import { Wrapper } from "./component.listButtonsSocialShare.styles";
import { useState } from "react";

export function ListButtonsSocialShare ( {canonicalURL = ""}: { canonicalURL?: string } ) {
  const [canonicalURLCopyStatus, setCanonicalURLCopyStatus] = useState ( false );

  function copyCanonicalURL () {
    navigator.clipboard.writeText ( canonicalURL ).then ( () => {
      setCanonicalURLCopyStatus ( true );
      setTimeout ( () => {
        setCanonicalURLCopyStatus ( false )
      }, 1000 )
    } )
  }

  function shareCanonicalURL ( type: string ) {
    switch (type) {
      case 'facebook':
        return window.open ( `https://www.facebook.com/sharer/sharer.php?u=${canonicalURL}`, '_blank' );
      case 'twitter':
        return window.open ( `https://twitter.com/intent/tweet?url=${canonicalURL}`, '_blank' );
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <button className="btn"
        onClick={() => shareCanonicalURL ( 'facebook' )} >
        <span>Udostępnij</span>
        <Facebook/>
      </button>
      <button className="btn" >
        <Twitter onClick={() => shareCanonicalURL ( 'twitter' )}/>
      </button>
      <button
        className="btn"
        onClick={() => copyCanonicalURL ()}>
        <Link/>
        <span>{canonicalURLCopyStatus ? "Skopiowano link!" : "Kopiuj link"}</span>
      </button>
    </Wrapper>
  )
}
