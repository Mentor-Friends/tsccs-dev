export const ckeditorCSS = `
/* CKEditor content styles */
.ck-content {
  /* Container styles */
  max-width: 100%;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  line-height: 1.5;
  padding: 0.75rem;
  background: #fff;
  color: #333;
  border: 1px solid #ccced1;
}

/* Headings */
.ck-content h1, .ck-content h2, .ck-content h3, 
.ck-content h4, .ck-content h5, .ck-content h6 {
  font-weight: 700;
  line-height: 1.2;
  margin: 1em 0 0.5em;
}

.ck-content h1 { font-size: 2.5em; }
.ck-content h2 { font-size: 2em; }
.ck-content h3 { font-size: 1.75em; }
.ck-content h4 { font-size: 1.5em; }
.ck-content h5 { font-size: 1.25em; }
.ck-content h6 { font-size: 1em; }

/* Paragraphs and spacing */
.ck-content p {
  margin: 1em 0;
  line-height: 1.6;
}

/* Links */
.ck-content a {
  color: #1a73e8;
  text-decoration: none;
}

.ck-content a:hover {
  text-decoration: underline;
}

/* Lists */
.ck-content ul,
.ck-content ol {
  padding-left: 2em;
  margin: 1em 0;
}

.ck-content ul {
  list-style: disc;
}

.ck-content ol {
  list-style: decimal;
}

.ck-content li {
  margin: 0.5em 0;
}

/* Blockquotes */
.ck-content blockquote {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 5px solid #ccc;
  font-style: italic;
  color: #666;
}

/* Code blocks */
.ck-content pre {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1em;
  margin: 1em 0;
  overflow-x: auto;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

.ck-content code {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

/* Tables */
.ck-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
}

.ck-content table th,
.ck-content table td {
  border: 1px solid #ddd;
  padding: 0.75em;
  text-align: left;
}

.ck-content table th {
  background: #f5f5f5;
  font-weight: bold;
}

/* Images */
.ck-content img {
  max-width: 100%;
  height: auto;
  margin: 1em 0;
}

.ck-content figure {
  margin: 1em 0;
  text-align: center;
}

.ck-content figure img {
  margin: 0;
}

.ck-content figcaption {
  color: #666;
  font-size: 0.9em;
  margin-top: 0.5em;
}

/* Dark mode */
/*
@media (prefers-color-scheme: dark) {
  .ck-content {
    background: #1a1a1a;
    color: #e0e0e0;
  }

  .ck-content a {
    color: #64b5f6;
  }

  .ck-content blockquote {
    border-left-color: #404040;
    color: #b0b0b0;
  }

  .ck-content pre,
  .ck-content code {
    background: #2d2d2d;
    border-color: #404040;
  }

  .ck-content table th,
  .ck-content table td {
    border-color: #404040;
  }

  .ck-content table th {
    background: #2d2d2d;
  }

  .ck-content figcaption {
    color: #b0b0b0;
  }
}
*/

/* CUSTOM DOCUMENTATION CSS */

#documentation-preview {
  border: 1px solid #ccc;
  padding: 1rem;
}

#documentation-preview h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.pre-wrapper {
  background: #f2f5f9;
  border: 1px solid #cecece;
  display: block;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.pre-wrapper pre {
  margin: 0;
  color: #e87aa2;
}

.widget-doc-section pre {
  background-color: transparent;
}

.widget-doc-section p {
  margin: 0;
}

.widget-doc-section code {
  color: #e87aa2;
  font-size: 0.875rem;
}

.mv-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.pv-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

  .widget-documentation-heading {
    background-color: #6e757d;
    color: #eee;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .widget-documentation-heading h4 {
    margin-bottom: 0;
  }

  .close-documentation-button {
    border: none;
    outline: none;
    background-color: transparent;
    line-height: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .close-documentation-button:hover,
  .close-documentation-button:focus  {
    background-color: transparent;
  }

  .documentation-creator {
    text-align: right;
    color: #666;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .documentation-creator span {
    font-style: italic;
  }

  .documentation-attachments {
    display: flex;
    flex-wrap: wrap;
  }

  .documentation-attachments img {
    width: 25%;
    height: auto;
    border: 1px solid #ccc;
    padding: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .documentation-attachments iframe {
    width: 50%;
    border: 1px solid #ccc;
    padding: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .widget-documentation-footer {
    text-align: right;
    margin-top: 1rem;
  }

  .widget-documentation-footer button {
    border-radius: 0;
    border: none;
    padding: 0.5rem 1.5rem;
    text-align: center;
    background: #6e757d;
    color: #eee;
  }

  #widget-details {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  #widget-details button {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0 0 0 0.25rem;
    height: auto;
    width: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  #widget-details button:hover, 
  #widget-details button:focus {
    opacity: 0.75;
  }

  #widget-details button span {
    pointer-events: none;
    font-size: 1rem;
  }

  #widget-details button svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    fill: #999;
  }

  #widget-documentation-preview-modal {
    border: none;
  }

  @media (min-width: 768px) {
    #widget-documentation-preview-modal {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
  }

`;
