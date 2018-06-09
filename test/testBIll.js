// This is a fake bill used for testing
module.exports = {
  'title': 'The bill Title',
  'bill_number': 12345,
  'status': 2,
  'status_update': '5-09-2018',
  'sponsors': [{
      'name': 'Sean Kelly',
      'party': 'D',
      'pic_id': '01234',
      'district': 'HD012',
      'url': 'https://www.google.com'
    },
    {
      'name': 'George Washginton',
      'pic_id': '01234',
      'party': 'D',
      'district': 'HD023',
      'url': 'https://www.google.com'
    },
    {
      'name': 'Abraham Lincoln',
      'party': 'R',
      'pic_id': '01234',
      'district': 'HD053',
      'url': 'https://www.google.com'
    }
  ],
  'votes': [
    {
      'roll_call_id': 751588,
      'date': '2018-05-09',
      'desc': 'Senate: Consideration of Resolutions Resolution',
      'yea': 35,
      'nay': 0,
      'nv': 0,
      'absent': 0,
      'total': 35,
      'passed': 1,
      'chamber': 'S',
      'chamber_id': 22,
      'url': 'https://legiscan.com/CO/rollcall/HJR1022/id/751588',
      'state_link': 'http://leg.colorado.gov/content/hjr18-1022vote19d54a'
    },
    {
      'roll_call_id': 751589,
      'date': '2018-05-09',
      'desc': 'House: Third Reading Res',
      'yea': 64,
      'nay': 0,
      'nv': 0,
      'absent': 1,
      'total': 65,
      'passed': 1,
      'chamber': 'H',
      'chamber_id': 21,
      'url': 'https://legiscan.com/CO/rollcall/HJR1022/id/751589',
      'state_link': 'http://leg.colorado.gov/content/hjr18-1022vote189402'
    }
  ],
  'text_link': 'https://www.google.com'
}