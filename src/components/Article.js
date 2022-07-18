function Article(props) {
  const { title, content, tags, index } = props;
  return (
    <div key={index}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={content} />
      <p>{tags}</p>
    </div>
  );
}

export default Article;
