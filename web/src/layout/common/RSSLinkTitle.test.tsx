import { render } from '@testing-library/react';
import React from 'react';

import RSSLinkTitle from './RSSLinkTitle';

const defaultProps = {
  package: {
    packageId: 'id',
    name: 'test',
    normalizedName: 'test',
    displayName: 'Pretty name',
    description: 'desc',
    logoImageId: 'imageId',
    appVersion: '1.0.0',
    repository: {
      repositoryId: '0acb228c-17ab-4e50-85e9-ffc7102ea423',
      kind: 0,
      name: 'stable',
      url: 'repoUrl',
      userAlias: 'user',
    },
    deprecated: false,
    signed: false,
    createdAt: 123,
  },
  title: 'Title',
};

describe('RSSLinkTitle', () => {
  it('creates snapshot', () => {
    const { asFragment } = render(<RSSLinkTitle {...defaultProps} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders proper content', () => {
    const { getByRole, getByText } = render(<RSSLinkTitle {...defaultProps} />);
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText('RSS')).toBeInTheDocument();
    const link = getByRole('button');
    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty('href', 'http://localhost/api/v1/packages/helm/stable/test/feed/rss');
  });
});
