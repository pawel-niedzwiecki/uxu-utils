import { PropsWithChildren } from "react";
import { NextSeoProps } from "next-seo";
import { FooterProps } from "../../templates/footer/types";
import { SearchEngine } from "./components/headerLeftComponents/types";

export type LayoutPostProps = PropsWithChildren<{
  seo?: NextSeoProps;
  footer: FooterProps;
  searchEngine?: SearchEngine;
  topElement?: JSX.Element | Array<JSX.Element>;
  siteBarLeft?: JSX.Element | Array<JSX.Element>;
}>
