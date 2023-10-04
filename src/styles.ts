import { CSSProperties } from "react";

export const rowStyle: CSSProperties = {
  display: "flex",
  justifyContent: 'center',
  padding: '0 30px'
};

export const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "400px",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
};

export const inputStyle = {
  height: "50px",
  width: "306px",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  background: "none",
  padding: "0px 30px",
};

export const cellStyle: CSSProperties = {
  display: "flex",
  border: "1px solid #FAFAFA",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  fontSize: "30px",
  fontFamily: "Maven pro",
};

export const playerText: CSSProperties = {
  fontSize: "30px",
  color: "blue",
  fontFamily: "Maven pro",
};

export const buttonStyle: CSSProperties = {
  display: "flex",
  backgroundColor: "blue",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  height: "30px",
  padding: "10px",
};
export const buttonContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "right",
  width: "300px",
};

export const Container: CSSProperties = {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    minHeight: '50px',
    background: 'black',
    padding: '10px',
    marginBottom: '30px',
    borderRadius: '20px',
    minWidth: '500px'
}
