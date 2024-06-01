import AvatarBlock from "@/components/AvatarBlock/AvatarBlock"

export default function Profile() {
    return (
        <div className="Profile">
            <div className="HomeContent">
                <AvatarBlock name={"Name"} imageUrl={""} bio={"My bio"} />
            </div>
        </div>
    )
}
