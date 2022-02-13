import gql from 'graphql-tag';

// Get details of product by id
export const ProductDetailsQuery = gql`
  query ($productId: UUID!) {
    singleProduct(productId: $productId) {
      id,
      title,
      imageUrl,
      description,
      optionId {
        id,
        title,
        imageUrl
      }
    }
  }
`;

// dummy
export const ProductLightQuery = gql`
  query ($productId: UUID!) {
    singleProduct(productId: $productId) {
      id,
      title,
    }
  }
`;
