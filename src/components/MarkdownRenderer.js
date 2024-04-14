import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';


import remarkGfm from 'remark-gfm'

function MarkdownRenderer({ filePath }) {
  const [markdown, setMarkdown] = useState('loading description...');

  // useEffect( () => {
  //   const fetchMD = async() => {
  //     const file = await import(`../games/${filePath}.md`)
  //     const response = await fetch(file.default);
  //     const text = await response.text();

  //     setMarkdown(text)
  //   }

  //   fetchMD()
  // }, [filePath])


  // const mdPath = require(`../games/${filePath}.md`)
  // useEffect(() => {
  //   const fetchMD = () => {
  //       fetch(mdPath)
  //       .then(response => response.text())
  //       .then(text => setMarkdown(text))
  //       .catch(error => console.error('Error fetching markdown:', error));
  //   };
  
  //   fetchMD();
  // }, [mdPath]);

  const mdPath = require(`../games/${filePath}.md`);

useEffect(() => {
  const fetchMD = () => {
    console.log('Fetching markdown...');
    fetch(mdPath)
      .then(response => {
        console.log('Received response:', response);
        return response.text();
      })
      .then(text => {
        console.log('Received markdown text:', text);
        setMarkdown(text);
      })
      .catch(error => console.error('Error fetching markdown:', error));
  };

  console.log('mdPath:', mdPath);

  fetchMD();
}, [mdPath]);


console.log("Current markdown is:"+markdown)
  // const markdown = "*just* a link: [link](https://zevdev.net)"
 return(
  
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>

  
 )
}


export default MarkdownRenderer;
