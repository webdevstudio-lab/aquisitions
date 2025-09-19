export const cookies = {
  getOptions: () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000,
  }),

  set: (res, name, value, options = {}) => {
    res.cookie(name, value, {
      ...this.getOptions(),
      ...options,
    });
  },

  clear: (res, name, options = {}) => {
    res.clearCookie(name, {
      ...this.getOptions(),
      ...options,
    });
  },

  get: (req, name) => req.cookies[name],
};
