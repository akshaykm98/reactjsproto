
import React from "react";
import styles from "./loginbtn.module.css";
import { Select } from "antd";
import { changeCountry } from "@store/countrySlice";
import { useDispatch, useSelector } from "react-redux"; 
import { RootState, store } from "@store/store";
const { Option } = Select;
import Flags from "country-flag-icons/react/3x2";



const Loginbtn= () => {

    const dispatch = useDispatch();
    let country = useSelector((state: RootState) => state.country_state.value);
    console.log(country,"2")
  
    function handleChange(value: any) {
      dispatch(changeCountry(value as string));
      console.log(value,"3")
    }
  return (
    <>
     <div className={styles.navbar}>
            <Select
              defaultValue={country}
              showArrow={false}
              bordered={false}
              style={{ width: 50 }}
              onChange={handleChange}
            >
              <Option value="us">
                <Flags.US title="United States" />
              </Option>
              <Option value="in">
                <Flags.IN title="India" />
              </Option>
            </Select>
          </div>
    </>
  );
};
export default Loginbtn;
