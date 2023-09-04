import React from 'react';
import { FooterProps } from './footer.types';
import { Link, Logo } from '../../atoms';
import styles from './footer.module.scss';

export function Footer({ footerColumnDataWithHeaderAndLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapperBrand}>
          <Link href="/" title="uxu">
            <Logo brandName="wTrasie" />
          </Link>
          <p>
            © 2023
            <Link href="https://www.uxu.pl" title="UXU">
              UXU
            </Link>
          </p>
        </div>

        {footerColumnDataWithHeaderAndLinks?.map((headerAndLinks, i) => (
          <div key={i}>
            {headerAndLinks?.header && <strong className={styles.columnHeader}>{headerAndLinks.header}</strong>}
            <ul>
              {headerAndLinks?.links?.map((link, j) => (
                <li key={j}>
                  <Link href={link?.url || ''} title={link?.title || ''}>
                    {link?.title || ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
