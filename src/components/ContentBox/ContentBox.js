import React from "react";
import { Container } from "react-bootstrap";
import HeaderTag from "../global/HeaderTag/HeaderTag";
import "./ContentBox.scss";

function ContentBox({ contentData }) {
  return (
    <Container bsPrefix="content-box---wrapper" className={contentData.cls}>
      {/* {contentData.header && <HeaderTag tag={contentData.header} className="gh-heading content-box--header">{contentData.header}</HeaderTag>} */}
      {contentData.img && (
        <div className="content-box--image-wrapper">
          <img
            src={contentData.img.src}
            alt={contentData.img.alt}
            className={`content-box--image ${contentData.img.cls}`}
          />
        </div>
      )}
      {contentData.content && (
        <div
          className={`content-box--texts ${
            contentData.content.align === "right"
              ? "content-box--text-right"
              : contentData.content.align === "left"
              ? "content-box--text-left"
              : ""
          } ${contentData.content.cls ? contentData.content.cls : ""}`}
        >
          {contentData.content.subtitle && (
            <HeaderTag
              tag={contentData.content.subtitle.tag}
              className="content-box--subtitle"
            >
              {contentData.content.subtitle.text}
            </HeaderTag>
          )}
          {contentData.content.title && (
            <HeaderTag
              tag={contentData.content.title.tag}
              className="content-box--title"
            >
              {contentData.content.title.text}
            </HeaderTag>
          )}
          {contentData.content.description && (
            <div
              className="content-box--description"
			  style={{
				color:"#9ca4ab",
				fontWeight:"500"
			  }}
              dangerouslySetInnerHTML={{
                __html: contentData.content.description,
              }}
            />
          )}
          {contentData.cta && (
            <a
              className={`cta ${contentData.cta.cls}`}
              href={contentData.cta.href}
            >
              {contentData.cta.text}
            </a>
          )}
        </div>
      )}
    </Container>
  );
}

export default ContentBox;
