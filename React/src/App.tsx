import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import FileUploader from 'devextreme-react/file-uploader';

function App(): JSX.Element {
  return (
    <div className="demo-container">
      <div className="file-uploader-block">
        <FileUploader
          id="file-uploader"
          multiple={true}
          uploadMode="useButtons"
          allowCanceling={true}
          accept="image/*"
          labelText="Drop Images Below to Upload..."
          maxFileSize={32000000}
          dropZone=".file-uploader-block"
        />
      </div>
    </div>
  );
}

export default App;
