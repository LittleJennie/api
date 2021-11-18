const borrower = {
  firstName: 'fakeName',
  lastName: '',
};

export function onSubmit(options) {
  console.log('*** options: ', options)
  borrower.firstName = options.firstName;
  borrower.lastName = options.lastName;
  return;
}

export function fetchName(url) {
  return borrower.firstName;
}
