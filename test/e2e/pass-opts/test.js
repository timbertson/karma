describe('config', function() {
  it('should be passed through to the browser', function() {
    expect(window.__karma__.config).not.toBe(undefined);
    expect(window.__karma__.config.cmd).toEqual('start');
    expect(window.__karma__.config.clientArgs).toEqual(['arg1','arg2','arg3']);
  });
});
