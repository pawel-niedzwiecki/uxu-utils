import { Button } from "./../../atoms/button";
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
      <Button
        onClick={() => shareCanonicalURL ( 'facebook' )}>
        <span>Udostępnij</span>
        <Facebook/>
      </Button>
      <Button>
        <Twitter
          onClick={() => shareCanonicalURL ( 'twitter' )}/>
      </Button>
      <Button
        onClick={() => copyCanonicalURL ()}>
        <Link/>
        <span>{canonicalURLCopyStatus ? "Skopiowano link!" : "Kopiuj link"}</span>
      </Button>
    </Wrapper>
  )
}
