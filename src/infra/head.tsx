import React from 'react'
import GlobalHead from 'next/head'

function Head({ title }) {
    return (
        <GlobalHead>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Arimo&display=swap" rel="stylesheet" />
        </GlobalHead>);
}
export default Head;