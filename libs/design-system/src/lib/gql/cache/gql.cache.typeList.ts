import type { TypeListingType } from './../type/gql.type.typeList';
import { makeVar } from '@apollo/client';

const typeListingInitialValue = 'grid';

export const typeListingVar = makeVar<TypeListingType>(typeListingInitialValue);
