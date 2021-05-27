const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {

    it('接受 closeButton', () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeBtnOptions: {
            text: '关闭吧',
            handleClose: callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.wlin-toast__close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      closeButton.click()
      expect(callback).to.have.been.called
    })
    it('接受 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position属性', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('wlin-toast--bottom')).to.eq(true)
    })
  })


}) 