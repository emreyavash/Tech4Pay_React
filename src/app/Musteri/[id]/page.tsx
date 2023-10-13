"use client";
import { Box, TextField } from "@mui/material";
import "./customerUpdate.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// "95d28054-6e45-dbc8-887c-3a0c0c277219" kişisel address id
//"8215ef34-2e23-3b95-0045-3a0c0c20b6eb" iş teelefon id

type Input = {
  name: string;
  surname: string;
  tcNo: string;
  gender: boolean;
  email: string;
  busiEmail: string;
  phoneNumber: string;
  busiPhoneNumber: string;
  address: string;
  busiAddress: string;
};
const schema = yup.object({
  name: yup.string().required("Zorunlu Alan"),
  surname: yup.string().required("Zorunlu Alan"),
  tcNo: yup.string().required("Zorunlu Alan"),
  gender: yup.boolean().required("Zorunlu Alan"),
  email: yup
    .string()
    .required("Zorunlu Alan")
    .email("Email adresi `@` ve `.com` içermelidir."),
  busiEmail: yup
    .string()
    .required("Zorunlu Alan")
    .email("Email adresi `@` ve `.com` içermelidir."),
  phoneNumber: yup.string().required("Zorunlu Alan"),
  busiPhoneNumber: yup.string().required("Zorunlu Alan"),
  address: yup.string().required("Zorunlu Alan"),
  busiAddress: yup.string().required("Zorunlu Alan"),
});

export default function Page({ params }: { params: { id: any } }) {
  const userId = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(schema) });

  const [user, setUser] = useState(Object);
  const [userEmail, setUserEmail] = useState<any[]>([]);
  const [userAddress, setUserAddress] = useState<any[]>([]);
  const [userPhoneNumber, setUserPhoneNumber] = useState<any[]>([]);
  const [gender, setGender] = useState("");
  const userPersonelEmailExist = userEmail.find(
    (x: any) => x.emailTypeId == "500acc74-e0f1-d252-a731-3a0c3c9ecc05"
  );
  const userBusinessEmailExist = userEmail.find(
    (x: any) => x.emailTypeId == "432844ab-90a3-4f39-db1d-3a0c091240e3"
  );

  const userPersonelNumberExist = userPhoneNumber.find(
    (x: any) => x.phoneTypeId == "2bf796d4-2301-d978-b30b-3a0c0c2ff0fc"
  );
  const userBusinessNumberExist = userPhoneNumber.find(
    (x: any) => x.phoneTypeId == "8215ef34-2e23-3b95-0045-3a0c0c20b6eb"
  );
  const userPersonelAddressExist = userAddress.find(
    (x: any) => x.addressId == "95d28054-6e45-dbc8-887c-3a0c0c277219"
  );
  const userBusinessAddressExist = userAddress.find(
    (x: any) => x.addressId == "3edb8d80-74d6-5919-e707-3a0c0911bba4"
  );
  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  useEffect(() => {
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
  const CustomerUpdate = (event: any) => {
    axios
      .put("https://localhost:44321/api/app/customer/" + userId + "/customer", {
        firstName: event.name,
        lastName: event.surname,
        tcNo: event.tcNo,
        gender: event.gender,

        customerAddresses: [
          {
            addressId: "95d28054-6e45-dbc8-887c-3a0c0c277219",
            address: event.address,
          },
          {
            addressId: "3edb8d80-74d6-5919-e707-3a0c0911bba4",
            address: event.busiAddress,
          },
        ],
        customerPhoneNumbers: [
          {
            phoneTypeId: "2bf796d4-2301-d978-b30b-3a0c0c2ff0fc",
            phoneNumber: event.phoneNumber,
          },
          {
            phoneTypeId: "8215ef34-2e23-3b95-0045-3a0c0c20b6eb",
            phoneNumber: event.busiPhoneNumber,
          },
        ],
        customerEmails: [
          {
            emailTypeId: "500acc74-e0f1-d252-a731-3a0c3c9ecc05",
            email: event.email,
          },
          {
            emailTypeId: "432844ab-90a3-4f39-db1d-3a0c091240e3",
            email: event.busiEmail,
          },
        ],
        customerPaymentInfos: [
          {
            paymentId: "285245ef-3d84-052d-98a7-3a0c3c9d499a",
          },
        ],
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteInput =(event:any)=>{
    event.preventDefault();
    setUser([])
    console.log(user)
  }
  return (
    <div className="customerUpdateContainer ">
      <div className="customerUpdateDiv">
        <Box
          component="form"
          method="post"
          onSubmit={handleSubmit(CustomerUpdate)}
        >
          <div className="col-5 mb-4">
            <TextField
              id="firstName"
              {...register("name")}
              label="Ad"
              fullWidth
              variant="outlined"
              defaultValue={user.firstName}
              focused
            />
            {errors.name ? (
              <p className="text-end text-danger">{errors.name?.message}</p>
            ) : null}
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              {...register("surname")}
              label="Soyad"
              fullWidth
              variant="outlined"
              defaultValue={user.lastName}
              focused
            />
            {errors.surname ? (
              <p className="text-end text-danger">{errors.surname?.message}</p>
            ) : null}
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="tcNo"
              {...register("tcNo")}
              label="Tc No"
              fullWidth
              variant="outlined"
              defaultValue={user.tcNo}
              focused
            />
            {errors.tcNo ? (
              <p className="text-end text-danger">{errors.tcNo?.message}</p>
            ) : null}
          </div>
          <div className="col-5 mb-4">
            <FormControl fullWidth>
              <InputLabel id="genderInput">Cinsiyet</InputLabel>
              <Select
                labelId="genderInput"
                id="gender"
                {...register("gender")}
                defaultValue={gender}
                label="Cinsiyet"
                onChange={handleChange}
              >
                <MenuItem value={"true"}>Erkek</MenuItem>
                <MenuItem value={"false"}>Kadın</MenuItem>
              </Select>
            </FormControl>
            {errors.gender ? (
              <p className="text-end text-danger">{errors.gender?.message}</p>
            ) : null}
          </div>
          <div className="col-5 mb-4">
            {/* Email div */}
            {userPersonelEmailExist != undefined ? (
              <TextField
                id="email"
                label="Email"
                {...register("email")}
                fullWidth
                variant="outlined"
                defaultValue={userPersonelEmailExist.email}
                focused
              />
            ) : (
              <TextField
                id="email"
                label="Email"
                {...register("email")}
                fullWidth
                variant="outlined"
              />
            )}
            {errors.email ? (
              <p className="text-end text-danger">{errors.email?.message}</p>
            ) : null}
          </div>
          <div className="col-5 mb-4">
            {/*  Business Email div */}
            {userBusinessEmailExist != undefined ? (
              <TextField
                id="busiEmail"
                label="İş Email"
                {...register("busiEmail")}
                fullWidth
                variant="outlined"
                defaultValue={userBusinessEmailExist.email}
                focused
              />
            ) : (
              <TextField
                id="busiEmail"
                label="İş Email"
                {...register("busiEmail")}
                fullWidth
                variant="outlined"
              />
            )}
            {errors.busiEmail ? (
              <p className="text-end text-danger">
                {errors.busiEmail?.message}
              </p>
            ) : null}
          </div>
          {/* Phone number div */}
          <div className="col-5 mb-4">
            {userPersonelNumberExist != undefined ? (
              <TextField
                id="phoneNumber"
                {...register("phoneNumber")}
                label="Telefon Numarası"
                fullWidth
                variant="outlined"
                defaultValue={userPersonelNumberExist.phoneNumber}
                focused
              />
            ) : (
              <TextField
                id="phoneNumber"
                {...register("phoneNumber")}
                label="Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            )}
            {errors.phoneNumber ? (
              <p className="text-end text-danger">
                {errors.phoneNumber?.message}
              </p>
            ) : null}
          </div>
          {/* Business Phone number div */}
          <div className="col-5 mb-4">
            {userBusinessNumberExist != undefined ? (
              <TextField
                id="busiPhoneNumber"
                {...register("busiPhoneNumber")}
                label="İş Telefon Numarası"
                fullWidth
                variant="outlined"
                defaultValue={userBusinessNumberExist.phoneNumber}
                focused
              />
            ) : (
              <TextField
                id="busiPhoneNumber"
                {...register("busiPhoneNumber")}
                label="İş Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            )}
            {errors.busiPhoneNumber ? (
              <p className="text-end text-danger">
                {errors.busiPhoneNumber?.message}
              </p>
            ) : null}
          </div>
          {/* Address div */}
          <div className="col-5 mb-4">
            {userPersonelAddressExist != undefined ? (
              <TextField
                id="address"
                {...register("address")}
                label="Adres"
                fullWidth
                variant="outlined"
                defaultValue={userPersonelAddressExist.address}
                focused
              />
            ) : (
              <TextField
                id="address"
                {...register("address")}
                label="Adres"
                fullWidth
                variant="outlined"
              />
            )}
            {errors.address ? (
              <p className="text-end text-danger">{errors.address?.message}</p>
            ) : null}
          </div>
          {/* Business Address div */}
          <div className="col-5 mb-4">
            {userBusinessAddressExist != undefined ? (
              <TextField
                id="busiAddress"
                {...register("busiAddress")}
                label="İş Adresi"
                fullWidth
                variant="outlined"
                defaultValue={userBusinessAddressExist.address}
                focused
              />
            ) : (
              <TextField
                id="busiAddress"
                {...register("busiAddress")}
                label="İş Adresi"
                fullWidth
                variant="outlined"
              />
            )}
            {errors.busiAddress ? (
              <p className="text-end text-danger">
                {errors.busiAddress?.message}
              </p>
            ) : null}
          </div>

          <div className="col-10 btnDiv">
            <button className="resetBtn" onClick={DeleteInput}>Temizle</button>

            <button className="addBtn">Düzenle</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
