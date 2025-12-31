import { Button, Card, Image, Text } from "@chakra-ui/react"
import PeopleModal from './PeopleModal';
import './people.css';

const PeopleCard = ({info}) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" className="card">
      <Image
        className="card-img"
        src={info.imagePath}
        alt="staff/faculty"
      />
      <Card.Body gap="2">
        <p className="text-center">{info.name}</p>
      </Card.Body>
      <Card.Footer gap="2">
        <PeopleModal info={info}></PeopleModal>
      </Card.Footer>
    </Card.Root>
  )
}
export default PeopleCard;
