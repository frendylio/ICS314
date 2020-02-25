import React from 'react';
import { Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class AboutPage extends React.Component {
  render() {
    return (
        <Container>
          <h1>
            What is stuff?
          </h1>
            Here are some definitions of stuff:
          <ul>
            <li>
              matter, material, articles, or activities of a specified or indeterminate kind
                that are being referred to, indicated, or implied. &quot;she&apos;s good at the technical stuff&quot;
            </li>
            <li>
              a person&quot;s belongings, equipment, or baggage. &quot;he took his stuff and went&quot;
            </li>
            <li>
              worthless or foolish ideas, speech, or writing; rubbish. &quot;stuff and nonsense!&quot;
            </li>
          </ul>
        </Container>
    );
  }
}

export default AboutPage;
