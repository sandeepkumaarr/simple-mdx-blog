import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from '../elements'

export const Footer = () => {
    
    const data = useStaticQuery(graphql`
    
    query {
        facebook: file(relativePath: {eq:"facebook.svg"}){
            publicURL
        }

        linkedin: file(relativePath: {eq:"linkedin.svg"}){
            publicURL
        }

        twitter: file(relativePath: {eq:"twitter.svg"}){
            publicURL
        }

        instagram: file(relativePath: {eq:"instagram.svg"}){
            publicURL
        }
    }

    
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.linkedin.publicURL} alt="linkedinlogo"  />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.facebook.publicURL} alt="facebooklogo"  />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.twitter.publicURL} alt="twitterlogo"  />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.instagram.publicURL} alt="instagramlogo"  />
                    </a>
                </FooterSocialIcons>

                <p>@ 2020 Company. All right reserved</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}