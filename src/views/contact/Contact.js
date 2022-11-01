import React, { useEffect } from "react";
import { IdeLayout } from "../../layouts/IdeLayout";
import { FolderSystemComponent } from "../../components/FolderSystemComponent";
import { useFolderState } from "../../hooks/useFolderState";
import { contactData } from "../../services/data";
import { ContacForm } from "../../components/ContactForm";
import { TextToCode } from "../../components/TextToCode";
import { useContactForm } from "../../hooks/useContactForm";
import { SuccessEmail } from "../../components/SuccessEmail";
import { ButtonComponent } from "../../components/ButtonComponent";
import { AllScreenLayoutCenter } from "../../layouts/AllScreenLayoutCenter";
import { LoaderComponent } from "../../components/LoaderComponent";

const findMeAlsoIn = [
  {
    name: "find-me-also-in",
    icon: undefined,
    info: [
      {
        title: "Instagram",
        extension: "com",
        icon: "emailIcon",
        //text: ' Email me at frankiize@gmail.com'
      },
    ],
    id: 4,
    show: false,
  },
];

const ContactPage = () => {
  const {
    state,
    handleOpenFileSystem,
    handleOpenFolder,
    handleOpenFile,
    dispatch,
  } = useFolderState();
  const {
    formState,
    onSubmitSForm,
    handleSetEmail,
    handleSetMessage,
    handleSetName,
    handleResetState,
  } = useContactForm();

  useEffect(() => {
    dispatch({
      type: "LOAD-FOLDERS",
      payload: [
        { folders: contactData, name: "contact-data", id: 2 },
        { folders: findMeAlsoIn, name: "find-me-also-in", id: 3 },
      ],
    });
  }, []);

  const codeStrings = [
    {
      string: 'const button = document.querySelector("#sendBtn")',
    },
    {
      string: "const message = { ",
    },
    {
      string: "name:",
      render: () => (
        <>
          <span>{formState.name}</span>
        </>
      ),
    },
    {
      string: "email:",
      render: () => (
        <>
          <span>{formState.email}</span>
        </>
      ),
    },
    {
      string: "message: ",
      render: () => (
        <>
          <span>{formState.message}</span>
        </>
      ),
    },
    {
      string: ' button.addEventListener("click", () form.send(message))',
    },
  ];

  return (
    <IdeLayout
      files={() => (
        <>
          {state.folders.map((item) => (
            <FolderSystemComponent
              key={`${item.name}-${item.id}`}
              id={item.id}
              title={item.name}
              state={item}
              handleOpenFileSystem={handleOpenFileSystem}
              handleOpenFolder={handleOpenFolder}
              handleOpenFile={null}
            />
          ))}
        </>
      )}
      windowOne={() =>
        !formState.error ? (
          !formState.isSend && !formState.loading ? (
            <ContacForm
              state={formState}
              handleSetName={handleSetName}
              handleSetEmail={handleSetEmail}
              handleSetMessage={handleSetMessage}
              onSubmitSForm={onSubmitSForm}
            />
          ) : formState.loading ? (
            <AllScreenLayoutCenter>
              <LoaderComponent />
            </AllScreenLayoutCenter>
          ) : (
            formState.isSend && <SuccessEmail onClick={handleResetState} />
          )
        ) : (
          <AllScreenLayoutCenter>
            <ButtonComponent
              onClick={handleResetState}
              text={"Error click para regresar"}
              type={"button"}
              classes={"primary"}
            />
          </AllScreenLayoutCenter>
        )
      }
      secondWindow={() => (
        <>
          {codeStrings.map((item, index) => (
            <TextToCode
              key={`code-${index}`}
              string={item.string}
              render={item.render}
            />
          ))}
        </>
      )}
    />
  );
};

export default ContactPage;
