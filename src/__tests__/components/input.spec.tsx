
import { render } from "@testing-library/react";
import Input from "../../components/Input";


describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByTitle } = render(
      <Input name="email" title="email" />
    );

    expect(getByTitle('email')).toBeTruthy();
  })
})