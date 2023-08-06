function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let result = '';
  let plainIndex = 0;
  let htmlIndex = 0;

  for (const position of plainTextPositions) {
    if (position.start > plainIndex) {
      result += htmlContent.substring(htmlIndex, position.start);
      htmlIndex = position.start;
    }

    const word = plainText.substring(position.start, position.end + 1);
    result += '<mark>' + htmlContent.substring(htmlIndex, htmlIndex + word.length) + '</mark>';
    htmlIndex += word.length;
    plainIndex = position.end + 1;
  }

  if (htmlIndex < htmlContent.length) {
    result += htmlContent.substring(htmlIndex);
  }

  return result;
}
