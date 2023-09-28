import React from 'react';
import { FooterProps } from './types';
import { Link, Logo } from '../../atoms';
import styles from './footer.module.scss';
import { useSiteConfig } from "../../../hooks";

export function Footer ( { footerColumns, brand }: FooterProps ) {
  const {site} = useSiteConfig ();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapperBrand}>
          <Link href="/" title={site?.shortname || ""}>
            <Logo brand={brand}/>
          </Link>
          <p>
            © 2023
            <Link href="https://www.uxu.pl" title="UXU">
              UXU
            </Link>
          </p>
        </div>

        {footerColumns?.map(( column, i ) => (
          <div key={i}>
            {column?.header && <strong className={styles.columnHeader}>{column.header}</strong>}
            <ul>
              {column?.links?.map ( ( link, j ) => (
                <li key={j}>
                  <Link href={link?.linkPath} title={link?.title || ''}>
                    {link?.title || ''}
                  </Link>
                </li>
              ) )}
            </ul>
          </div>
        ) )}
      </div>
    </footer>
  );
}
