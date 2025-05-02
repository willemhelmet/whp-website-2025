function XRButton({ store }) {
  return (
    <button className={"XRButton"} onClick={() => store.enterVR()}>
      Immersive Mode
    </button>
  );
}
export default XRButton;
