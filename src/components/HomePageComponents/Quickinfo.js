import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class Quickinfo extends Component {
    render() {
        return (
            <Section>
                <Title message="let us tell you" title="our mission" />
                <QuickInfoWrapper>
                    <p className="text">
                    Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL. Like a staging environment for every PR or branch, previews are perfect for testing and collaboration
                    </p>
                    <Link to="/about" style={{ textDecoration: 'none'}}>
                        <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text {
        line-height: 2rem;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }
    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 60%;
    }
`