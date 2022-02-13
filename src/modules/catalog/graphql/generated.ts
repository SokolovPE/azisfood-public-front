import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  UUID: any;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['UUID'];
  order: Scalars['Int'];
  subCategories?: Maybe<Array<Scalars['UUID']>>;
  title?: Maybe<Scalars['String']>;
};

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<Scalars['Decimal']>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<Scalars['Float']>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ComparableGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<Scalars['UUID']>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['UUID'];
  measureUnitId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IngredientUsage = {
  __typename?: 'IngredientUsage';
  amount: Scalars['Decimal'];
  ingredientId: Scalars['UUID'];
  toggleable: Scalars['Boolean'];
};

export type IngredientUsageFilterInput = {
  amount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<IngredientUsageFilterInput>>;
  ingredientId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<IngredientUsageFilterInput>>;
  toggleable?: InputMaybe<BooleanOperationFilterInput>;
};

export type ListComparableGuidOperationFilterInput = {
  all?: InputMaybe<ComparableGuidOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComparableGuidOperationFilterInput>;
  some?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type ListFilterInputTypeOfIngredientUsageFilterInput = {
  all?: InputMaybe<IngredientUsageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<IngredientUsageFilterInput>;
  some?: InputMaybe<IngredientUsageFilterInput>;
};

export type NutritionFact = {
  __typename?: 'NutritionFact';
  calories: Scalars['Float'];
  carbohydrates: Scalars['Float'];
  energy: Scalars['Float'];
  id: Scalars['UUID'];
  proteins: Scalars['Float'];
  totalFat: Scalars['Float'];
  totalSugar: Scalars['Float'];
};

export type NutritionFactFilterInput = {
  and?: InputMaybe<Array<NutritionFactFilterInput>>;
  calories?: InputMaybe<ComparableDoubleOperationFilterInput>;
  carbohydrates?: InputMaybe<ComparableDoubleOperationFilterInput>;
  energy?: InputMaybe<ComparableDoubleOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<NutritionFactFilterInput>>;
  proteins?: InputMaybe<ComparableDoubleOperationFilterInput>;
  totalFat?: InputMaybe<ComparableDoubleOperationFilterInput>;
  totalSugar?: InputMaybe<ComparableDoubleOperationFilterInput>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  price: Scalars['Decimal'];
  title?: Maybe<Scalars['String']>;
};

/** Represents products in catalog */
export type Product = {
  __typename?: 'Product';
  /** List of categories assigned to product */
  categoryId?: Maybe<Array<Maybe<Category>>>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<IngredientUsage>>>;
  nutritionFact?: Maybe<NutritionFact>;
  /** List of options assigned to product */
  optionId?: Maybe<Array<Maybe<Option>>>;
  price: Scalars['Decimal'];
  servingSize: Scalars['Float'];
  title?: Maybe<Scalars['String']>;
};

/** GraphQL demo query */
export type Query = {
  __typename?: 'Query';
  /** Get list of categories */
  category?: Maybe<Array<Maybe<Category>>>;
  /** Get list of ingredients */
  ingredient?: Maybe<Array<Maybe<Ingredient>>>;
  /** Get list of options */
  option?: Maybe<Array<Maybe<Option>>>;
  /** Get list of products */
  product?: Maybe<Array<Maybe<Product>>>;
  /** Get product by id */
  singleProduct?: Maybe<Product>;
};

/** GraphQL demo query */
export type QuerySingleProductArgs = {
  productId: Scalars['UUID'];
};

// eslint-disable-next-line no-shadow
export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type CategoryFilterInput = {
  and?: InputMaybe<Array<CategoryFilterInput>>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<CategoryFilterInput>>;
  order?: InputMaybe<ComparableInt32OperationFilterInput>;
  subCategories?: InputMaybe<ListComparableGuidOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type CategorySortInput = {
  id?: InputMaybe<SortEnumType>;
  order?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type IngredientFilterInput = {
  and?: InputMaybe<Array<IngredientFilterInput>>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  measureUnitId?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<IngredientFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type IngredientSortInput = {
  id?: InputMaybe<SortEnumType>;
  measureUnitId?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type NutritionFactSortInput = {
  calories?: InputMaybe<SortEnumType>;
  carbohydrates?: InputMaybe<SortEnumType>;
  energy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  proteins?: InputMaybe<SortEnumType>;
  totalFat?: InputMaybe<SortEnumType>;
  totalSugar?: InputMaybe<SortEnumType>;
};

export type OptionFilterInput = {
  and?: InputMaybe<Array<OptionFilterInput>>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<OptionFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type OptionSortInput = {
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  categoryId?: InputMaybe<ListComparableGuidOperationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  ingredients?: InputMaybe<ListFilterInputTypeOfIngredientUsageFilterInput>;
  nutritionFact?: InputMaybe<NutritionFactFilterInput>;
  optionId?: InputMaybe<ListComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  servingSize?: InputMaybe<ComparableDoubleOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type ProductSortInput = {
  code?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  nutritionFact?: InputMaybe<NutritionFactSortInput>;
  price?: InputMaybe<SortEnumType>;
  servingSize?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

/** GraphQL demo query */
export type QueryCategoryArgs = {
  order?: InputMaybe<Array<CategorySortInput>>;
  where?: InputMaybe<CategoryFilterInput>;
};

/** GraphQL demo query */
export type QueryIngredientArgs = {
  order?: InputMaybe<Array<IngredientSortInput>>;
  where?: InputMaybe<IngredientFilterInput>;
};

/** GraphQL demo query */
export type QueryOptionArgs = {
  order?: InputMaybe<Array<OptionSortInput>>;
  where?: InputMaybe<OptionFilterInput>;
};

/** GraphQL demo query */
export type QueryProductArgs = {
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};
