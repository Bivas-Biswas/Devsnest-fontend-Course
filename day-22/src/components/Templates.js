const Templates = ({ templates, setMeme }) => {
    // console.log(templates);
  return (
    <div className="Templates">
      {templates.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => setMeme(template)}
        >
          <div
            className="image"
            style={{ backgroundImage: `url(${template.url})` }}
          ></div>
          <p>{template.name}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Templates;
