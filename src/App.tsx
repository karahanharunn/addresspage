import React, { useState } from "react";
import styles from "./styles.module.css";
import SvgSearch from "./icons/Search";
import SvgExport from "./icons/Export";
import SvgImport from "./icons/Import";
import { data } from "./constant";
import SvgShare from "./icons/Share";
import SvgEdit from "./icons/Edit";
import SvgCopy from "./icons/Copy";
import SvgDelete from "./icons/Delete";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./app.css";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";
function App() {
  const [Text, setText] = useState("");
  const [CreateAccountVisible, setCreateAccountVisible] = useState(false);
  const [EditAccountVisible, setEditAccountVisible] = useState(false);
  const [DeleteAccountVisible, setDeleteAccountVisible] = useState(false);
  const [SendCryptoVisible, setSendCryptoVisible] = useState(false);
  const [SelectedId, setSelectedId] = useState<any>(null);
  return (
    <div className="App">
      <MyVerticallyCenteredModal
        title="Create new contact"
        show={CreateAccountVisible}
        onHide={() => setCreateAccountVisible(false)}
        footer={<Button className={styles.button}>Create Contact</Button>}
      >
        <InputGroup style={{ marginBottom: 28 }}>
          <FormControl
            placeholder="Name"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            placeholder="Wallet Address"
            aria-label="Text input with radio button"
          />
        </InputGroup>
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal
        show={EditAccountVisible}
        onHide={() => setEditAccountVisible(false)}
        title="Edit Contact"
        footer={<Button className={styles.button}>Save</Button>}
      >
        <InputGroup style={{ marginBottom: 28 }}>
          <FormControl
            placeholder="Name"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            placeholder="Wallet Address"
            aria-label="Text input with radio button"
          />
        </InputGroup>
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal
        title="Delete Contact"
        show={DeleteAccountVisible}
        onHide={() => setDeleteAccountVisible(false)}
        footer={
          <div className="w-100">
            <Button
              style={{ height: 56 }}
              className="d-block w-100"
              variant="danger"
            >
              Delete Contact
            </Button>
            <Button
              style={{ height: 56 }}
              className="m-auto w-100"
              variant="link"
            >
              Cancel
            </Button>
          </div>
        }
      >
        <div className="my-3">
          You really want to delete <strong>Claire Smith</strong> contact?
        </div>
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal
        title="Send"
        show={SendCryptoVisible}
        onHide={() => setSendCryptoVisible(false)}
        footer={
          <div className="w-100">
            <Button style={{ height: 56 }} className={styles.button + " w-100"}>
              Send Crypto
            </Button>
            <Button
              style={{ height: 56, marginTop: 24 }}
              className={styles.button + " w-100"}
            >
              Send NFT's
            </Button>
          </div>
        }
      >
        <div className="my-3">Please select what you will send to</div>
        <div className="d-flex gap-2">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Avatar"
            className={styles.image}
          />
          <div>
            <span className="pl-1"> {"daniel.eth"}</span>
            <div className={styles.address}>
              {" "}
              0xB3a0aE8E5cce5cfE09f7d15E5F4C54Cd9B17Ec5a
            </div>
          </div>
        </div>
      </MyVerticallyCenteredModal>
      <div style={{ height: "100vh" }} className="d-flex">
        <div style={{ width: 337, background: "yellow" }}>left menü</div>
        <div className={styles.main + " w-100"}>
          <div className="d-flex justify-content-between">
            <div>
              <div className={styles.title}>Address Book</div>
              <div className={styles.subTitle}>
                Save the wallets you interact with
              </div>
            </div>
            <div>
              <div
                onClick={() => setCreateAccountVisible(true)}
                className={styles.createContact}
              >
                <button className={styles.btnText + " btn"}>
                  + Create Contact
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: 48, height: 40, marginBottom: 24 }}
            className={" w-100 d-flex justify-content-between"}
          >
            <div className={styles.input}>
              <div>
                <SvgSearch
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 10,
                    transform: "scale(0.70)",
                  }}
                />
              </div>
              <input
                onChange={(e) => setText(e.target.value)}
                placeholder="Search"
                className={styles.inputItem}
              />
            </div>
            <div style={{ gap: 28 }} className="d-flex align-items-center">
              <div className={styles.iconText}>
                <SvgExport style={{ transform: "scale(0.8)" }} />
                Export
              </div>
              <div className={styles.iconText}>
                <SvgImport style={{ transform: "scale(0.8)" }} />
                Import
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <table className={"table"}>
              <thead>
                <tr>
                  <th className={styles.tableTitle + " w-25"}>Name</th>
                  <th className={styles.tableTitle + " w-75"}>
                    Wallet address
                  </th>
                </tr>
              </thead>
              <tbody style={{ borderTop: 0 }}>
                {data
                  .filter((data) => data.name.includes(Text))
                  .map((data) => {
                    return (
                      <tr className={styles.tableRow}>
                        <td className={styles.tableText}>
                          <img
                            src={data.imgUrl}
                            alt="Avatar"
                            className={styles.image}
                          />
                          <span className={styles.tableText}> {data.name}</span>
                        </td>
                        <td>
                          <div className="pt-2 d-flex align-items-center">
                            <span className={styles.tableAddress}>
                              0xB3a0aE8E5cce5cfE09f7d15E5F4C54Cd9B17Ec5a
                            </span>
                            <IconComponent>
                              <SvgEdit />
                            </IconComponent>
                            <IconComponent>
                              <SvgShare />
                            </IconComponent>
                          </div>
                        </td>
                        <td className={styles.tableAddress}>
                          <div className={styles.hoveredBlock + " pt-2"}>
                            <span
                              onClick={() => {
                                setSelectedId(data.id);
                                setSendCryptoVisible(true);
                              }}
                              className={styles.send}
                            >
                              Send
                            </span>
                            <IconComponent
                              onClick={() => {
                                setSelectedId(data.id);
                                setEditAccountVisible(true);
                              }}
                              style={{ paddingLeft: 24 }}
                            >
                              <SvgCopy />
                            </IconComponent>
                            <IconComponent
                              onClick={() => {
                                setSelectedId(data.id);
                                setDeleteAccountVisible(true);
                              }}
                              style={{ paddingLeft: 24 }}
                            >
                              <SvgDelete />
                            </IconComponent>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {data.filter((data) => data.name.includes(Text)).length ==
                  0 && <div className={styles.noFound}>No results found</div>}
              </tbody>
              <tfoot className={styles.tableFooter}>
                <td style={{ textAlign: "end" }} colSpan={12}>
                  <span
                    style={{ justifyContent: "flex-end" }}
                    className="d-flex gap-2"
                  >
                    <div className={styles.tableIcon}>
                      <ChevronLeft color="white" />
                    </div>
                    <span className={styles.footerText}>1-4 of 4</span>
                    <div className={styles.tableIcon}>
                      <ChevronRight />
                    </div>
                  </span>
                </td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
function IconComponent({ children, ...rest }: any) {
  return (
    <span style={{ paddingLeft: 12 }} {...rest} role="button">
      {children}
    </span>
  );
}
function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-90w"
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer className="border-0">{props.footer}</Modal.Footer>
    </Modal>
  );
}
