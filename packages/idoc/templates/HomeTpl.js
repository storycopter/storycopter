import { graphql } from 'gatsby';
import React from 'react';
import { sortBy } from 'lodash';

import { IdocProvider } from '@storycopter/ui/providers';
import { Layout } from '@storycopter/ui/partials';
import { map } from '@storycopter/ui/components';

const HomeTpl = (
  {
    data: {
      pagesJson: { tree },
    },
  },
  props
) => {
  const { components } = tree;
  return (
    <Layout isHome>
      {sortBy(components, [o => o.order]).map(component => {
        // console.group('Component');
        // console.log(component);
        // console.groupEnd();
        const RenderedComponent = map[component.type];
        return (
          <IdocProvider invert={component.options.invert} key={component.id}>
            <RenderedComponent {...component.options} />
          </IdocProvider>
        );
      })}
    </Layout>
  );
};

export default HomeTpl;

export const pageQuery = graphql`
  query HomeTplQuery($uid: String!) {
    pagesJson(meta: { uid: { eq: $uid } }) {
      meta {
        path
        title
        uid
      }
      tree {
        components {
          id
          options {
            align
            anchor
            animate
            cover
            fill
            invert
            mask
            subtitle
            text
            title
          }
          order
          type
        }
        componentIds
      }
    }
  }
`;