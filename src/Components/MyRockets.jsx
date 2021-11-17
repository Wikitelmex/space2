import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const myMyrockets = rockets.filter((rocket) => rocket.added === true);

  return (
    <div>
      <table className="border col-12">
        {myMyrockets.length > 0
          && myMyrockets.map((rocket) => (
            <tr className="border" key={rocket.id}>
              <td className="align-middle">
                <p className="mt-3 ms-2">
                  {rocket.name}
                </p>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default MyRockets;
