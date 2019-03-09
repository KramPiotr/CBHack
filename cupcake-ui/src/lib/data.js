const sampleAccount = {
  type: 'account',
  data: {
    attributes: {
      'account-type': 'individual',
      'admin-email': 'peter.wiggen@example.com',
      contact: {
        email: 'peter.wiggen@example.com',
        phone: '555-555-5323',
        'last-name': 'Wiggen',
        'first-name': 'Peter',
        address: {
          city: 'Toronto',
          'postal-code': 'N4N2L1',
          'province-region': 'Ontario',
          'street-address-1': '925 Madison Avenue',
          country: 'CA',
        },
      },
    },
  },
};

const patientRecord = {
  patientName: 'John Doe',
  height: 1.8,
  weight: 80,
  prescriptions: [
    {drugName: 'Penicillin', dosage: '500mg once a day'},
    {drugName: 'Sugar Pills', dosage: 'As many as possible'}
  ],
  notes: "John has recurring sore knees.";
};

// const sampleCupcake = {
//   flavour: 'chocolate',
//   icing: 'chocolate',
//   sprinkles: {
//     quantity: 41,
//     type: 'rainbow',
//   },
//   candle: {
//     colour: 'blue',
//     ignited: false,
//   },
// };

module.exports = {
  sampleAccount,
  patientRecord,
  // sampleCupcake,
};
