# 안녕하세요
*최종현*이라고 합니다
만나서 반갑습니다
### 하이
```c++
#include <stdio.h>
using namespace std;
#define setio ios::sync_with_stdio(0); cin.tie(0);
#define endl "\n";

int board[502][502];
bool visited[502][502];
int dx[4] = {0,1,-1,0};
int dy[4] = {1,0,0,-1};

int main(void) {
  int n,m;
  cin >> n;
  cout << "Hello World" << endl;
  for (int i=0;i<n; i++) {
    for (int j=0; j<m; j++) {
      cin >> board[502][502];
    }
  }
}
```