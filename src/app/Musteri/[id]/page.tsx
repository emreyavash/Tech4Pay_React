"use client";
import { Box, TextField } from "@mui/material";
import "./customerUpdate.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "axios";
// "95d28054-6e45-dbc8-887c-3a0c0c277219" kişisel address id
//"8215ef34-2e23-3b95-0045-3a0c0c20b6eb" iş teelefon id
export default function Page({ params }: { params: { id: any } }) {
  const userId = params.id;

  const [user, setUser] = useState(Object);
  const [userEmail, setUserEmail] = useState<any[]>([]);
  const [userAddress, setUserAddress] = useState<any[]>([]);
  const [userPhoneNumber, setUserPhoneNumber] = useState<any[]>([]);
  const [gender, setGender] = useState("");
  const deneme = user.emailTypeId
  const userEmailExist = userEmail.flatMap(
    (x: any) => x.emailTypeId == "500acc74-e0f1-d252-a731-3a0c3c9ecc05"
  )[0];
  const userNumberExist = userPhoneNumber.flatMap(
    (x: any) => x.phoneTypeId == "2bf796d4-2301-d978-b30b-3a0c0c2ff0fc"
  )[0];
  const userAddressExist = userAddress.flatMap(
    (x: any) => x.addressId == "95d28054-6e45-dbc8-887c-3a0c0c277219"
  )[0];
  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  useEffect(() => {
    console.log(user)
    axios
      .get("https://localhost:44321/api/Customer/GetCustomerById?id=" + userId)
      .then((res) => {
        setUser(res.data);
        setUserEmail(res.data.customerEmails);
        setUserAddress(res.data.customerAddresses);
        setUserPhoneNumber(res.data.customerPhoneNumbers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("https://localhost:44321/api/Customer/CreateCustomer", {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      tcNo: data.get("tcNo"),
      gender: data.get("gender"),

      customerAddresses: [
        {
          addressId: "95d28054-6e45-dbc8-887c-3a0c0c277219",
          address: data.get("address"),
        },
        {
          addressId: "3edb8d80-74d6-5919-e707-3a0c0911bba4",
          address: data.get("busiAddress"),
        },
      ],
      customerPhoneNumbers: [
        {
          phoneTypeId: "2bf796d4-2301-d978-b30b-3a0c0c2ff0fc",
          phoneNumber: data.get("phoneNumber"),
        },
        {
          phoneTypeId: "8215ef34-2e23-3b95-0045-3a0c0c20b6eb",
          phoneNumber: data.get("busiPhoneNumber"),
        },
      ],
      customerEmails: [
        {
          emailTypeId: "500acc74-e0f1-d252-a731-3a0c3c9ecc05",
          email: data.get("email"),
        },
        {
          emailTypeId: "432844ab-90a3-4f39-db1d-3a0c091240e3",
          email: data.get("busiEmail"),
        },
      ],
      customerPaymentInfos: [
        {
          paymentId: "285245ef-3d84-052d-98a7-3a0c3c9d499a",
        },
      ],
    });
  };
  return (
    <div className="customerUpdateContainer ">
      <div className="customerUpdateDiv">
        <Box component="form" method="post" onSubmit={handleSubmit}>
          <div className="col-5 mb-4">
            <TextField
              id="firstName"
              name="firstName"
              label="Ad"
              fullWidth
              variant="outlined"
              defaultValue={user.firstName}
              focused
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              name="lastName"
              label="Soyad"
              fullWidth
              variant="outlined"
              defaultValue={user.lastName}
              focused
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="tcNo"
              name="tcNo"
              label="Tc No"
              fullWidth
              variant="outlined"
              defaultValue={user.tcNo}
              focused
            />
          </div>
          <div className="col-5 mb-4">
            <FormControl fullWidth>
              <InputLabel id="genderInput">Cinsiyet</InputLabel>
              <Select
                labelId="genderInput"
                id="gender"
                name="gender"
                defaultValue={gender}
                label="Cinsiyet"
                onChange={handleChange}
              >
                <MenuItem value={"true"}>Erkek</MenuItem>
                <MenuItem value={"false"}>Kadın</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Email div */}
          <div className="col-5 mb-4">
            {userEmail.length != 0 && userEmailExist ? (
              <TextField
                id="email"
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
                defaultValue={userEmail[0].email}
                focused
              />
            ) : (
              <TextField
                id="email"
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
              />
            )}
          </div>
          {/*Business Email div */}
          <div className="col-5 mb-4">
            {userEmail.length != 0 ? (
              <TextField
                id="email"
                label="İş Email"
                name="email"
                fullWidth
                variant="outlined"
                defaultValue={
                  !userEmailExist ? userEmail[0].email : userEmail[1].email
                }
                focused
              />
            ) : (
              <TextField
                id="email"
                label="İş Email"
                name="email"
                fullWidth
                variant="outlined"
              />
            )}
          </div>
          {/* Phone number div */}
          <div className="col-5 mb-4">
            {userPhoneNumber.length != 0 && userNumberExist ? (
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Telefon Numarası"
                fullWidth
                variant="outlined"
                defaultValue={userPhoneNumber[0].phoneNumber}
                focused
              />
            ) : (
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            )}
          </div>
          {/* Business Phone number div */}
          <div className="col-5 mb-4">
            {userPhoneNumber.length != 0 || userNumberExist==false? (
              <TextField
                id="busiPhoneNumber"
                name="busiPhoneNumber"
                label="İş Telefon Numarası"
                fullWidth
                variant="outlined"
                defaultValue={
                  (!userNumberExist)
                    ? userPhoneNumber[0].phoneNumber
                    : userPhoneNumber[1].phoneNumber
                }
                focused
              />
            ) : (
              <TextField
                id="busiPhoneNumber"
                name="busiPhoneNumber"
                label="İş Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            )}
          </div>
          {/* Address div */}
          <div className="col-5 mb-4">
            {userAddress.length != 0 && userAddressExist ? (
              <TextField
                id="address"
                name="address"
                label="Adres"
                fullWidth
                variant="outlined"
                defaultValue={userAddress[0].address}
                focused
              />
            ) : (
              <TextField
                id="address"
                name="address"
                label="Adres"
                fullWidth
                variant="outlined"
              />
            )}
          </div>
          {/* Business Address div */}
          <div className="col-5 mb-4">
            {userAddress.length != 0 ? (
              <TextField
                id="busiAddress"
                name="busiAddress"
                label="İş Adresi"
                fullWidth
                variant="outlined"
                defaultValue={
                  !userAddressExist
                    ? userAddress[0].address
                    : userAddress[1].address
                }
                focused
              />
            ) : (
              <TextField
                id="busiAddress"
                name="busiAddress"
                label="İş Adresi"
                fullWidth
                variant="outlined"
              />
            )}
          </div>

          <div className="col-10 btnDiv">
            <button className="resetBtn">Temizle</button>

            <button className="addBtn">Düzenle</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
