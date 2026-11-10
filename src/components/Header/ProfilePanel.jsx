import ProfileList from "../Profile/ProfileList";

function ProfilePanel() {
  return (
    <div className="opacity-0 invisible absolute z-999 top-[90%] left-0 w-67.5 bg-(--border-color-alt)  rounded-4xl border border-(--border-color) group-hover:opacity-100 group-hover:visible">
      <ProfileList />
    </div>
  );
}

export default ProfilePanel;
