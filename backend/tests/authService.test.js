const authService = require('../src/services/AuthService');
const userRepository = require('../src/repositories/UserRepository');

// UserRepository ရဲ့ function တွေကို Mock လုပ်မယ် (DB အစစ်ကို မထိအောင်)
jest.mock('../src/repositories/UserRepository');

describe('AuthService - Register', () => {
  
  // Test Case: User ရှိပြီးသားဖြစ်နေရင် Error ပြရမယ်
  it('should throw an error if user already exists', async () => {
    // ပုံစံတူ User တစ်ယောက် ရှိနေတယ်လို့ ဟန်ဆောင်လိုက်မယ်
    userRepository.findByEmail.mockResolvedValue({ email: 'test@me.com' });

    await expect(authService.registerUser({ email: 'test@me.com' }))
      .rejects.toThrow("User already exists");
  });

  // Test Case: အချက်အလက်အသစ်ဆိုရင် အောင်မြင်စွာ သိမ်းဆည်းနိုင်ရမယ်
  it('should create a new user successfully', async () => {
    userRepository.findByEmail.mockResolvedValue(null); // User မရှိသေးဘူးလို့ သတ်မှတ်
    userRepository.create.mockResolvedValue({ id: 1, email: 'new@me.com' });

    const result = await authService.registerUser({ 
      email: 'new@me.com', 
      name: 'Pyae Phyo', 
      password: 'password123' 
    });

    expect(result).toHaveProperty('id');
    expect(userRepository.create).toHaveBeenCalled(); // create function ကို ခေါ်လိုက်သလား စစ်တာ
  });
});