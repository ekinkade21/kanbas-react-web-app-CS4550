let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2', 'string3'];

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

function FindFunction() {
  return (
    <>
      <h3>Find</h3>
      fourIndex = {four} <br />
      string3Index = {string3} <br />
    </>
  );
}
export default FindFunction;