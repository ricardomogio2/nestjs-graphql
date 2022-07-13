import { Injectable } from '@nestjs/common';
import { Search, SearchResult } from './search.entity';
import { includes } from 'lodash';

const externalAPIResponse = {
  data: {
    meta: {
      total: 2,
    },
    users: [
      {
        name: 'NestJS',
        id: 'nest-123',
      },
      {
        name: 'Typescript',
        id: '987-typeof'
      },
    ],
  },
};

const savedUsersIds = ['nest-123'];

@Injectable()
export class SearchService {
  public async searchForUsers(): Promise<Search> {
    const search = new Search();

    // Here's where my app perfoms an external API call. This response can have hundreds of users
    const response = externalAPIResponse;

    const users = response.data.users.map((u) => {
      const user = new SearchResult();
      user.id = u.id;
      user.name = u.name;

      // This is what I don't want to do, because it can be expensive.
      user.isSaved = includes(savedUsersIds, user.id) ? true : false;

      return user;
    });

    search.meta = response.data.meta;
    search.data = users;

    return search
  }
}
