import * as React from "react";
import {} from "reactstrap";
import Media from "reactstrap/lib/Media";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Axios from "axios";
import { API_URL } from "src/data/Api";

// const getFileName = (value: any) => {
//   const fileName = value.split("\\")[value.split("\\").length - 1];
//   const fileSourceUrl =
//     API_URL + "/attachements/container/download/" + fileName;
//   console.log(fileName, fileSourceUrl);
//   return fileSourceUrl;
// };

interface State {
  avatarUrl: string;
}
interface OwnProps {
  errors?: any;
  values?: any;
  touched?: any;
  fileUploadUrl: string;
  handleChange: (e: any) => void;
}

type Props = OwnProps;

export default class AvatarUpload extends React.Component<Props, State> {
  state = {
    avatarUrl: ""
  };

  render() {
    const { errors, values, fileUploadUrl, touched, handleChange } = this.props;
    const { avatarUrl } = this.state;
    return (
      <div>
        <Input
          type="text"
          name="avatar"
          id="avatar"
          placeholder="avatar"
          autoComplete="avatar"
          invalid={Boolean(errors.avatar && touched.avatar)}
          value={API_URL + "/attachements/container/download/" + avatarUrl}
          onChange={handleChange}
        />
        <Media>
          <Media left={true} href="#">
            <img
              style={{ width: "100%" }}
              src={API_URL + "/attachements/container/download/" + avatarUrl}
              alt=""
            />
          </Media>
          <Media body={true}>
            <Media heading={true}>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input
            type="file"
            name="avatar"
            id="avatar"
            placeholder="avatar"
            autoComplete="avatar"
            invalid={Boolean(errors.avatar && touched.avatar)}
            value={values.avatar}
            onChange={e => {
              console.log((e as any).target.files[0]);
              //;
              const file = (e as any).target.files[0];
              const formData = new FormData();
              formData.append("file", file);
              const config = {
                headers: {
                  "content-type": "multipart/form-data"
                }
              };
              return Axios.post(fileUploadUrl, formData, config)
                .then(res => res.data)
                .then(data => data.result.files.file[0].name)
                .then(fileName => {
                  this.setState({
                    avatarUrl: fileName
                  });
                  console.log(fileName);
                });
            }}
          />
        </FormGroup>
      </div>
    );
  }
}
