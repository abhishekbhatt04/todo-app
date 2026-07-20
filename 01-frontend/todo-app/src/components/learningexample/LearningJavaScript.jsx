const person = {
    name: "Abhi Bhatt",
    address: {
        line1: 'Madhur vihar',
        city: 'Dehradun',
        country: 'India'
    },
    profiles: ['X', "Instagram", "Facebook"],
    printProfile: () => {
        person.profiles.map(
            (
                profile => console.log(profile)
            )
        )
        // console.log(person.profiles[1])
    }
}


export default function LearningJavaScript() {
    return (
        <>
            <div >{person.name}</div>
            <div >{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>

    )
}