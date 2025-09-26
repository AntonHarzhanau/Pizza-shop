import { InfoBlock } from "@/shared/components";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock 
        title='Access denied'
        text="Log in to view this page"
        imageUrl='/unauthorized.png'
      />
    </div>
  )
}