import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SearchMeta {
  @Field(() => Int, { nullable: true })
  total?: number;
}

@ObjectType()
export class SearchResult {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  isSaved?: boolean;
}

@ObjectType()
export class Search {
  @Field(() => SearchMeta, { nullable: true })
  meta?: SearchMeta;

  @Field(() => [SearchResult], { nullable: true })
  data?: SearchResult[];
}
