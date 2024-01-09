

const Avatar = ({person, size}) => {
    console.log(person,size)
    return (
        <div>
            <h3>Avatar</h3>
            <h5>Name: {person.name}</h5>
            <p>ImageId: {person.imageId}</p>
            <p>Size: {size}</p>
        </div>
    );
};

export default Avatar;