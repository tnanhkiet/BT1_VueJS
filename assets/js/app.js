new Vue({
    el: '#app',
    data: {
        currentTab: 1,
        firstSubmit: false,
        businessAccountId: "",
        pixelName: "",
        listBusinessAccount: [
            {
              id: 255697,
              name: 'Account 1'
            },
            {
              id: 582235,
              name: 'Account 2'
            },
            {
              id: 9789564,
              name: 'Account 3'
            },
            {
              id: 524756,
              name: 'Account 4'
            }
          ],
        listPixelAccount: [
            {
              id: 1,
              parentId: 255697,
              name: 'Pixel 1'
            },
            {
              id: 2,
              parentId: 582235,
              name: 'Pixel 2'
            },
            {
              id: 3,
              parentId: 582235,
              name: 'Pixel 3'
            },
            {
              id: 4,
              parentId: 255697,
              name: 'Pixel 4'
            },
            {
              id: 5,
              parentId: 9789564,
              name: 'Pixel 5'
            },
            {
              id: 6,
              parentId: 255697,
              name: 'Pixel 6'
            },
            {
              id: 7,
              parentId: 582235,
              name: 'Pixel 7'
            },
            {
              id: 8,
              parentId: 9789564,
              name: 'Pixel 8'
            },
            {
              id: 9,
              parentId: 255697,
              name: 'Pixel 9'
            },
            {
              id: 10,
              parentId: 582235,
              name: 'Pixel 10'
            },
            {
              id: 11,
              parentId: 9789564,
              name: 'Pixel 11'
            },
            {
              id: 12,
              parentId: 255697,
              name: 'Pixel 12'
            }
          ],
    },
    methods: {
      onSubmit() {
          this.firstSubmit = true;
      }
    },
    computed: {
        filterPixel() {
            if (this.listBusinessAccount) {
                return this.listPixelAccount.filter((el) => el.parentId == this.businessAccountId)
            }
        },
        validatePixelName() {
            if (this.pixelName) {
                return this.firstSubmit && /[0-9]/.test(this.pixelName)
            }
            return false
        }
    }
})