import React from 'react';
import { render } from '@testing-library/react';
import { Features } from '../components';

describe('<Features />', () => {
  it('renders the <Features /> with populated data', () => {
    const { container, getByText } = render(
      <Features>
        <Features.Title>
          Unlimited films, TV programmes and more.
        </Features.Title>
        <Features.Subtitle>
          Watch anywhere. Cancel at any time.
        </Features.Subtitle>
      </Features>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Features /> with just a title', () => {
    const { container, getByText, queryByText } = render(
      <Features>
        <Features.Title>
          Unlimited films, TV programmes and more.
        </Features.Title>
      </Features>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel at any time.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
