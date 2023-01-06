import { Label } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import "./employerProfile.css";
import { db, storage } from "../../../../firebaseConfig";
import { Notification } from "../../../../utils/Notification";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function EmployerProfile() {
  const [disableFields, setDisableFields] = useState(true);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(0);
  let inputRef = React.createRef();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyLocation: "",
    industryType: "",
    companyWebsite: "",
    noOfEmployees: "",
    companyTagLine: "",
    companyDescription: "",
    logo: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    // console.log(values);
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.uid;

    //call firebase function to create employer profile
    // store in firestore collection (userInfo)
    //create a doc with docId = uid

    // setDoc(docInfo, data)
    // docInfo = doc(database, collection name, docId)
    try {
      await setDoc(doc(db, "userInfo", uid), {
        ...values,
        type: "employer",
      });
      Notification({ message: "Profile created successfully" });
      navigate("/employer/profile");
    } catch (error) {
      // console.log(error);
      Notification({ message: "Something went wrong" });
    }
  };

  useEffect(() => {
    setLoading(true);
    let user = JSON.parse(localStorage.getItem("user"));
    let uid = user.uid;
    let docRef = doc(db, "userInfo", uid);

    getDoc(docRef).then((doc) => {
      if (doc.exists()) setValues({ ...doc.data() });
      else Notification({ message: "Error fetching data from firebase" });
      setLoading(false);
    });
  }, []);

  const uploadLogo = (e) => {
    let file = e.target.files[0];
    // console.log(file);

    const storageRef = ref(storage, "company-logo/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadLoading(progress);
      },
      (error) => {
        Notification({ message: "Something went wrong" });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setValues({ ...values, logo: downloadURL });
          Notification({ message: "File uploaded successfully" });
        });
      }
    );
  };

  const toggleEdit = () => {
    if (disableFields) setDisableFields(false);
    else setDisableFields(true);
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <form onSubmit={(e) => submit(e)} className="onboarding-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button onClick={toggleEdit}>
                {disableFields ? "Edit" : "Save"}
              </Button>
              <Button>Logout</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Name</label>
              <TextField
                disabled={disableFields}
                required
                size="small"
                fullWidth
                value={values.companyName}
                onChange={(e) =>
                  setValues({ ...values, companyName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Email</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.companyEmail}
                onChange={(e) =>
                  setValues({ ...values, companyEmail: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Phone</label>
              <TextField
                disabled={disableFields}
                required
                size="small"
                fullWidth
                value={values.companyPhone}
                onChange={(e) =>
                  setValues({ ...values, companyPhone: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Location</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.companyLocation}
                onChange={(e) =>
                  setValues({ ...values, companyLocation: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Type</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.industryType}
                onChange={(e) =>
                  setValues({ ...values, industryType: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Website</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.companyWebsite}
                onChange={(e) =>
                  setValues({ ...values, companyWebsite: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Company Tagline</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.companyTagLine}
                onChange={(e) =>
                  setValues({ ...values, companyTagLine: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="field-label">Number of Employees</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                value={values.noOfEmployees}
                onChange={(e) =>
                  setValues({ ...values, noOfEmployees: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <label className="field-label">Company Description</label>
              <TextField
                disabled={disableFields}
                size="small"
                fullWidth
                multiline
                minRows={5}
                value={values.companyDescription}
                onChange={(e) =>
                  setValues({ ...values, companyDescription: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <label className="field-label">Company Logo</label>
              {uploadLoading > 0 && uploadLoading < 100 ? (
                <div>Loading ... {uploadLoading}% completed</div>
              ) : (
                <>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    type={"file"}
                    ref={inputRef}
                    onChange={(e) => uploadLogo(e)}
                  />
                  <div className="upload-btn-container">
                    <Button
                      disabled={disableFields}
                      onClick={() => inputRef.current.click()}
                    >
                      Upload logo
                    </Button>
                    {values.logo && (
                      <img alt="company logo" src={values.logo} width="200px" />
                    )}
                  </div>
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              <div className="btn-container">
                <Button type="submit">Complete Setup</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
}

export default EmployerProfile;
