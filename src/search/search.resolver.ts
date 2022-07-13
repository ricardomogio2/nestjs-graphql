import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';

import { Search, SearchResult } from './search.entity';
import { SearchService } from './search.service';

@Resolver(() => Search)
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Query(() => Search)
  public async searchUsers(): Promise<Search> {
    return this.searchService.searchForUsers();
  }

  /**
   * Is there a way to use @ResolveField to resolve inner objects properties?
  @ResolveField('isSaved', () => Boolean, { nullable: true })
  public async isSaved(@Parent() _search: SearchResult): Promise<boolean> {
    // Here should be placed logic to resolve the isSaved field, only when needed
    return true;
  }
  */
}
