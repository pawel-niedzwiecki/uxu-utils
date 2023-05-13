import { Button, Col } from "../../../../../atoms";
import { functionSelectIcon } from "../../../../../../utils";
import { Wrapper } from "./components.section.listingArticles.header.styles";
import type { ListingArticlesHeaderProps } from './components.section.listingArticles.header.types'

export function ListingArticlesHeader ( {listingType, setListingType}: ListingArticlesHeaderProps ) {
  return (
    <Col xs={12}>
      <Wrapper>
        <span>Lista</span>
        <Button
          type="button"
          variant="shadow"
          color="danger"
          shape="circle"
          size="default"
          title={`zmień listę artykułów na ${listingType === 'grid' ? 'listę' : 'siatkę'}`}
          onClick={() => (listingType === 'grid' ? setListingType ( 'list' ) : setListingType ( 'grid' ))}
        >
          {functionSelectIcon ( listingType === 'grid' ? 'list' : 'grid', 20 )}
        </Button>
      </Wrapper>
    </Col>
  )
}
